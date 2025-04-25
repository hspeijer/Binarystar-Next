import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MistakesWhitepaper = (props) => {
  return (
    <>
      <div className={`mistakes-whitepaper-container1 ${props.rootClassName} `}>
        <div className="mistakes-whitepaper-max-width">
          <div className="mistakes-whitepaper-container2">
            <div className="mistakes-whitepaper-white-paper">
              <div className="mistakes-whitepaper-section1">
                <div className="mistakes-whitepaper-section2">
                  <div className="mistakes-whitepaper-group1">
                    <div className="mistakes-whitepaper-col1">
                      <div className="mistakes-whitepaper-heading">
                        <div className="mistakes-whitepaper-texts">
                          <span className="mistakes-whitepaper-text10">
                            FREE white paper
                          </span>
                          <span className="mistakes-whitepaper-text11">
                            10 Mistakes in PICK/U2 Modernization
                          </span>
                        </div>
                        <span className="mistakes-whitepaper-text12">
                          Modernizing your PICK/U2 system is essential—but one
                          wrong move can lead to wasted time, budget overruns,
                          and critical failures. Avoid these pitfalls with
                          expert insights and practical strategies for a smooth
                          transition.
                        </span>
                      </div>
                      <div className="mistakes-whitepaper-group2">
                        <span className="mistakes-whitepaper-text13">
                          In this free ebook, you&apos;ll learn how to prevent:
                        </span>
                        <div className="mistakes-whitepaper-list">
                          <div className="mistakes-whitepaper-item1">
                            <div className="mistakes-whitepaper-col2">
                              <img
                                alt="circlecheck2174"
                                src="/external/circlecheck2174-bn9dr.svg"
                                className="mistakes-whitepaper-circlecheck1"
                              />
                            </div>
                            <span className="mistakes-whitepaper-text14">
                              &quot;Lift and shift&quot; failures –
                              Modernization isn’t just moving code
                            </span>
                          </div>
                          <div className="mistakes-whitepaper-item2">
                            <div className="mistakes-whitepaper-col3">
                              <img
                                alt="circlecheck2174"
                                src="/external/circlecheck2174-zsyn.svg"
                                className="mistakes-whitepaper-circlecheck2"
                              />
                            </div>
                            <span className="mistakes-whitepaper-text15">
                              Losing critical business rules – Extract and
                              preserve hidden logic
                            </span>
                          </div>
                          <div className="mistakes-whitepaper-item3">
                            <div className="mistakes-whitepaper-col4">
                              <img
                                alt="circlecheck2174"
                                src="/external/circlecheck2174-8qsl.svg"
                                className="mistakes-whitepaper-circlecheck3"
                              />
                            </div>
                            <span className="mistakes-whitepaper-text16">
                              Breaking dependencies – Identify and refactor old
                              ties properly
                            </span>
                          </div>
                          <div className="mistakes-whitepaper-item4">
                            <div className="mistakes-whitepaper-col5">
                              <img
                                alt="circlecheck2174"
                                src="/external/circlecheck2174-idf.svg"
                                className="mistakes-whitepaper-circlecheck4"
                              />
                            </div>
                            <span className="mistakes-whitepaper-text17">
                              Data &amp; scalability issues – Migrate and
                              future-proof the right way
                            </span>
                          </div>
                          <div className="mistakes-whitepaper-item5">
                            <div className="mistakes-whitepaper-col6">
                              <img
                                alt="circlecheck2174"
                                src="/external/circlecheck2174-7db8.svg"
                                className="mistakes-whitepaper-circlecheck5"
                              />
                            </div>
                            <span className="mistakes-whitepaper-text18">
                              Underestimating team skills – Bridge the gap with
                              training &amp; AI
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mistakes-whitepaper-col7">
                      <div className="mistakes-whitepaper-card">
                        <div className="mistakes-whitepaper-pattern"></div>
                        <div className="mistakes-whitepaper-form">
                          <span className="mistakes-whitepaper-text19">
                            Get the free white paper!
                          </span>
                          <input
                            type="text"
                            placeholder="Business e-mail"
                            className="mistakes-whitepaper-input"
                          />
                          <button className="mistakes-whitepaper-button-primary">
                            <img
                              alt="Bracket1I2174"
                              src="/external/bracket1i2174-vtin.svg"
                              className="mistakes-whitepaper-bracket1"
                            />
                            <button className="mistakes-whitepaper-button">
                              <img
                                alt="BackgroundI2174"
                                src="/external/backgroundi2174-9mj6-200h.png"
                                className="mistakes-whitepaper-background"
                              />
                              <span className="mistakes-whitepaper-text20">
                                Download Now
                              </span>
                            </button>
                            <img
                              alt="Bracket2I2174"
                              src="/external/bracket2i2174-k2j9.svg"
                              className="mistakes-whitepaper-bracket2"
                            />
                          </button>
                        </div>
                        <img
                          alt="image2174"
                          src="/external/image2174-1h9v-400h.png"
                          className="mistakes-whitepaper-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mistakes-whitepaper-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .mistakes-whitepaper-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            background-color: rgba(15, 20, 34, 0);
          }
          .mistakes-whitepaper-container2 {
            display: flex;
            max-width: 1440px;
            align-items: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
          }
          .mistakes-whitepaper-white-paper {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(15, 20, 34, 1);
          }
          .mistakes-whitepaper-section1 {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mistakes-whitepaper-section2 {
            gap: 240px;
            display: flex;
            padding: 64px 216px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mistakes-whitepaper-group1 {
            gap: 211px;
            width: 1216px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .mistakes-whitepaper-col1 {
            gap: 80px;
            width: 592px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .mistakes-whitepaper-heading {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mistakes-whitepaper-texts {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mistakes-whitepaper-text10 {
            color: rgba(255, 92, 0, 1);
            height: auto;
            font-size: 20px;
            font-style: Mono Medium;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-text11 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 48px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-text12 {
            color: rgba(192, 194, 198, 1);
            height: auto;
            font-size: 20px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-group2 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mistakes-whitepaper-text13 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-list {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .mistakes-whitepaper-item1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-col2 {
            gap: 10px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-circlecheck1 {
            width: 24px;
            height: 24px;
          }
          .mistakes-whitepaper-text14 {
            color: rgba(192, 194, 198, 1);
            height: auto;
            flex-grow: 1;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-item2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-col3 {
            gap: 10px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-circlecheck2 {
            width: 24px;
            height: 24px;
          }
          .mistakes-whitepaper-text15 {
            color: rgba(192, 194, 198, 1);
            height: auto;
            flex-grow: 1;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-item3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-col4 {
            gap: 10px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-circlecheck3 {
            width: 24px;
            height: 24px;
          }
          .mistakes-whitepaper-text16 {
            color: rgba(192, 194, 198, 1);
            height: auto;
            flex-grow: 1;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-item4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-col5 {
            gap: 10px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-circlecheck4 {
            width: 24px;
            height: 24px;
          }
          .mistakes-whitepaper-text17 {
            color: rgba(192, 194, 198, 1);
            height: auto;
            flex-grow: 1;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-item5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-col6 {
            gap: 10px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-circlecheck5 {
            width: 24px;
            height: 24px;
          }
          .mistakes-whitepaper-text18 {
            color: rgba(192, 194, 198, 1);
            height: auto;
            flex-grow: 1;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-col7 {
            gap: 10px;
            width: 488px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-card {
            gap: 16px;
            width: 488px;
            display: flex;
            padding: 160px 40px 40px;
            z-index: 1;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 1);
          }
          .mistakes-whitepaper-pattern {
            top: 2px;
            left: 322px;
            width: 166px;
            height: 103px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .mistakes-whitepaper-form {
            gap: 24px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .mistakes-whitepaper-text19 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            font-size: 20px;
            font-style: Mono Medium;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-input {
            color: rgba(104, 114, 125, 1);
            display: flex;
            padding: 16px;
            font-size: 16px;
            align-self: stretch;
            text-align: center;
            align-items: center;
            flex-shrink: 0;
            font-family: Roobert TRIAL;
            font-weight: 400;
            background-color: rgba(245, 245, 245, 1);
          }
          .mistakes-whitepaper-button-primary {
            gap: -2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .mistakes-whitepaper-bracket1 {
            width: 6px;
            height: 64px;
          }
          .mistakes-whitepaper-button {
            gap: 10px;
            display: flex;
            padding: 16px 24px;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
          }
          .mistakes-whitepaper-background {
            top: 0px;
            left: 0px;
            width: 400px;
            height: 56px;
            position: absolute;
          }
          .mistakes-whitepaper-text20 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            z-index: 1;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .mistakes-whitepaper-bracket2 {
            width: 6px;
            height: 64px;
          }
          .mistakes-whitepaper-image {
            top: -198px;
            left: 40px;
            width: 197px;
            height: 343px;
            z-index: 2;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

MistakesWhitepaper.defaultProps = {
  rootClassName: '',
}

MistakesWhitepaper.propTypes = {
  rootClassName: PropTypes.string,
}

export default MistakesWhitepaper
