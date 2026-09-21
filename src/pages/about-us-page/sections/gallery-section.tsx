import { useTranslation } from 'react-i18next'

// Every photo of the group lives in the gallery folder; the contact sheet
// picks them all up so adding a picture never requires a code change.
const galleryModules = import.meta.glob<string>('../../../assets/about-us/gallery/*.jpg', {
  eager: true,
  import: 'default'
})
const photos = Object.keys(galleryModules)
  .sort()
  .map((key) => galleryModules[key])

const GallerySection = () => {
  const { t } = useTranslation()

  return (
    <section className="md:py-[80px] py-[50px]">
      <div className="border-t-2 border-white pt-[14px] md:mb-[36px] mb-[24px]">
        <h2 className="font-humane font-bold uppercase md:text-[32px] text-[22px] leading-[95%]">
          {t('04 — Oameni și momente')}
        </h2>
      </div>

      <p className="text-[14px] leading-[155%] text-white/80 max-w-[70ch] md:mb-[32px] mb-[20px]">
        {t('Fiecare eveniment lasă în urmă oameni, prietenii și câte o fotografie.')}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[4px]">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`BEST Chisinau ${index + 1}`}
            className="w-full aspect-square object-cover grayscale"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}

export default GallerySection
