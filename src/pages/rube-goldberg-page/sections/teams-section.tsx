import useCopy from '../use-copy'
import RailHeading from '../components/rail-heading'
import { Cascade, CascadeItem, DrawRule } from '../motion/primitives'
import { facultyCount, labels, teamCount, teams } from '../data'

const TeamsSection = () => {
  const { copy, pick } = useCopy()

  return (
    <section id="echipe" className="rg-field rg-field--deep rg-teams" aria-labelledby="rg-teams-heading">
      <div className="rg-grid">
        <RailHeading id="rg-teams-heading" title={copy('ECHIPE PARTICIPANTE.', 'PARTICIPATING TEAMS.')}>
          <p className="rg-teams__intro">{copy('La ediția din 2026 participă 9 echipe formate din studenți ai mai multor facultăți și centre universitare. Sunt reprezentate facultățile FET, FEIE, FCIM, FIMIT, FUA, FD și FCG, precum și Centrul Universitar din Cahul.', 'The 2026 edition brings together nine teams of students from several faculties and university centres. FCIM enters two teams, while each of the other represented faculties and centres enters one.')}</p>
          {/* Eight rows, nine teams: the labelled counts close the arithmetic. */}
          <ul className="rg-teams__count">
            <li>
              <strong className="rg-numeral">{teamCount}</strong>
              <span className="rg-label">{pick(labels.teams)}</span>
            </li>
            <li>
              <strong className="rg-numeral">{facultyCount}</strong>
              <span className="rg-label">{pick(labels.faculties)}</span>
            </li>
          </ul>
        </RailHeading>
        <div className="rg-teams__table">
          <DrawRule />
          <Cascade as="ul">
            {teams.map(({ short, full, note }) => (
              <CascadeItem className="rg-team" key={short}>
                <h3>
                  {short}
                  {note && <span className="rg-label">{pick(note)}</span>}
                </h3>
                <p>{pick(full)}</p>
              </CascadeItem>
            ))}
          </Cascade>
        </div>
      </div>
    </section>
  )
}

export default TeamsSection
