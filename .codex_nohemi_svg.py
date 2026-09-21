import json
import sys
from html import escape

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont


FONT_PATHS = {
    "Regular": "src/fonts/Nohemi/Nohemi-Regular-BF6438cc58b98fc.otf",
    "Medium": "src/fonts/Nohemi/Nohemi-Medium-BF6438cc581a509.otf",
    "SemiBold": "src/fonts/Nohemi/Nohemi-SemiBold-BF6438cc588b5e5.otf",
    "Bold": "src/fonts/Nohemi/Nohemi-Bold-BF6438cc5812315.otf",
}


def glyph_run(text, style, size, baseline, opacity):
    font = TTFont(FONT_PATHS[style])
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    metrics = font["hmtx"].metrics
    units_per_em = font["head"].unitsPerEm
    scale = size / units_per_em
    x = 0
    parts = [f'<g fill="#ffffff" opacity="{opacity}">']
    for char in text:
        glyph_name = cmap.get(ord(char), ".notdef")
        advance, _ = metrics[glyph_name]
        if char != " ":
            pen = SVGPathPen(glyph_set)
            glyph_set[glyph_name].draw(pen)
            path = pen.getCommands()
            if path:
                parts.append(
                    f'<path d="{escape(path)}" transform="translate({x * scale:.3f} {baseline:.3f}) scale({scale:.6f} {-scale:.6f})"/>'
                )
        x += advance
    parts.append("</g>")
    return "".join(parts), x * scale


spec = json.loads(sys.argv[1])
width = float(spec["width"])
height = float(spec["height"])
runs = []
for line in spec["lines"]:
    svg, _ = glyph_run(
        line["text"],
        line.get("style", "Regular"),
        float(line["size"]),
        float(line["baseline"]),
        float(line.get("opacity", 1)),
    )
    runs.append(svg)

print(
    f'<svg width="{width:g}" height="{height:g}" viewBox="0 0 {width:g} {height:g}" '
    'xmlns="http://www.w3.org/2000/svg">' + "".join(runs) + "</svg>"
)
