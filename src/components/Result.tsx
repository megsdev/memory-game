import styled from "styled-components"
import { COLORS } from "src/common/constants"
import itMe from "src/assets/itMe.jpg"

const Result = () => (
  <StyledResult>
    <h1>You can still make the whole place ✨shimmer✨</h1>
    <StyledContentContainer>
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <Paragraph hi={true}>It's me. Hi.</Paragraph>
        <Image src={itMe} />
      </div>
      <StyledTextContainer>
        <Paragraph>
          Thank you for playing! <br />
          <br />
          This game was made by your friendly, neighborhood swiftie with React,
          TypeScript, styled-components, and Giphy API.
          <br />
          <br />
          Need a web developer? I'm currently available for part-time contract work.
        </Paragraph>
        <ResultsButton as="a" href="https://www.moxiedev.co">
          Website
        </ResultsButton>
        <ResultsButton as="a" href="https://www.linkedin.com/in/megduclos/">
          LinkedIn
        </ResultsButton>
      </StyledTextContainer>
    </StyledContentContainer>
  </StyledResult>
)
export default Result

const StyledResult = styled.div`
  color: ${COLORS.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledContentContainer = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

const StyledTextContainer = styled.div`
  width: 50%;
  margin-bottom: 3em;

  @media (max-width: 850px) {
    width: 100%;
  }
`

const Paragraph = styled.p<{ hi?: boolean }>`
  font-weight: bold;

  ${props =>
    props.hi &&
    `
    transform: rotate(-8deg);
    grid-row-start: 1;
    grid-column-start: 1;
    z-index: 1;

    @media (max-width: 850px) {
    transform: none;
  }
}`}
`

const ResultsButton = styled.button`
  font-size: 1em;
  font-weight: bold;
  background-color: ${COLORS.darkBlue};
  color: ${COLORS.lightBlue};
  border: none;
  height: 4.5em;
  width: 50%;
  border-radius: 100em;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em auto 1em;
  transition: var(--transition), opacity 0.5s;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`

const Image = styled.img`
  flex-wrap: wrap;
  width: 20em;
  border-radius: 2em;
  min-height: 15em;
  transform: rotate(-8deg);
  grid-row-start: 1;
  grid-column-start: 1;
  margin-bottom: 3em;

  @media (max-width: 850px) {
    transform: none;
  }
`
