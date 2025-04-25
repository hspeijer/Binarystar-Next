import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentCards = (props) => {
  return (
    <>
      <div className={`content-cards-container1 ${props.rootClassName} `}>
        <div className="content-cards-inner">
          <div className="content-cards-fancy-heading">
            <div className="content-cards-heading">
              <span className="content-cards-text1">Benefits</span>
            </div>
            <div className="content-cards-description">
              <span className="content-cards-text2">
                Transform your development process and stay ahead of the
                competition with MYRA’s intelligent insights.
              </span>
            </div>
          </div>
          <div className="content-cards-row">
            <div className="card">
              <div className="content-cards-container2">
                <div className="content-cards-header1">
                  <div className="content-cards-custom-icon1">
                    <img
                      alt="IconI185"
                      src="/external/iconi185-4us.svg"
                      className="content-cards-icon1"
                    />
                  </div>
                  <span className="content-cards-text3">
                    Enhanced Visibility
                  </span>
                  <div className="content-cards-container3">
                    <span className="content-cards-text4">
                      Understand your code at a granular level to make informed
                      decisions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-cards-container4">
                <div className="content-cards-header2">
                  <div className="content-cards-custom-icon2">
                    <img
                      alt="IconI185"
                      src="/external/iconi185-4us.svg"
                      className="content-cards-icon2"
                    />
                  </div>
                  <span className="content-cards-text5">
                    Strategic Modernization
                  </span>
                  <div className="content-cards-container5">
                    <span className="content-cards-text6">
                      Pinpoint outdated components and prioritize upgrades that
                      align with business goals.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-cards-spacer">
              <div className="card">
                <div className="content-cards-container6">
                  <div className="content-cards-header3">
                    <div className="content-cards-custom-icon3">
                      <img
                        alt="IconI185"
                        src="/external/iconi185-4us.svg"
                        className="content-cards-icon3"
                      />
                    </div>
                    <span className="content-cards-text7">Risk Mitigation</span>
                    <div className="content-cards-container7">
                      <span className="content-cards-text8">
                        Proactively address vulnerabilities and inefficiencies
                        before they impact operations.
                      </span>
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
          .content-cards-container1 {
            width: auto;
            height: auto;
            display: flex;
            max-width: 1440;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-inner {
            gap: 80px;
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .content-cards-fancy-heading {
            width: 80%;
            display: flex;
            max-width: 1008px;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .content-cards-heading {
            gap: 10px;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .content-cards-text1 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            flex-grow: 1;
            font-size: 56px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-description {
            gap: 10px;
            width: 384px;
            display: flex;
          }
          .content-cards-text2 {
            color: rgba(104, 114, 125, 1);
            height: auto;
            flex-grow: 1;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-row {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .content-cards-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-header1 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-custom-icon1 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .content-cards-icon1 {
            width: 48px;
            height: 48px;
          }
          .content-cards-text3 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            font-size: 28px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-text4 {
            color: rgba(104, 114, 125, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-header2 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-custom-icon2 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .content-cards-icon2 {
            width: 48px;
            height: 48px;
          }
          .content-cards-text5 {
            color: rgb(16, 20, 35);
            height: auto;
            font-size: 28px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: 'Roobert TRIAL';
            font-weight: 400;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-text6 {
            color: rgb(104, 114, 125);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: 'Roobert TRIAL';
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-spacer {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .content-cards-container6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-header3 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-custom-icon3 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .content-cards-icon3 {
            width: 48px;
            height: 48px;
          }
          .content-cards-text7 {
            color: rgb(16, 20, 35);
            height: auto;
            font-size: 28px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: 'Roobert TRIAL';
            font-weight: 400;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .content-cards-container7 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .content-cards-text8 {
            color: rgb(104, 114, 125);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: 'Roobert TRIAL';
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }

          @media (max-width: 1024px) {
            .content-cards-fancy-heading {
              align-items: center;
              flex-direction: column;
            }
            .content-cards-heading {
              align-self: center;
              flex-direction: column;
              justify-content: center;
            }
            .content-cards-text1 {
              align-self: center;
            }
            .content-cards-description {
              align-self: center;
              flex-direction: column;
            }
            .content-cards-text2 {
              color: rgb(104, 114, 125);
              font-size: 20px;
              text-align: center;
              font-family: Roobert TRIAL;
              font-weight: 400;
              line-height: 150%;
              text-decoration: none;
            }
            .content-cards-row {
              flex-wrap: wrap;
            }
            .content-cards-spacer {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 650px) {
            .content-cards-container1 {
              height: auto;
            }
          }
          @media (max-width: 375px) {
            .content-cards-description {
              width: auto;
            }
            .content-cards-text2 {
              color: rgb(104, 114, 125);
              font-size: 20px;
              font-family: Roobert TRIAL;
              font-weight: 400;
              line-height: 150%;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

ContentCards.defaultProps = {
  rootClassName: '',
}

ContentCards.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContentCards
