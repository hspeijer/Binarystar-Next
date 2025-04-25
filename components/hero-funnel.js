import React, { Fragment, useEffect } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ActionButton from './action-button'

const HeroFunnel = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className={`hero-funnel-container1 ${props.rootClassName} `}>
        <div className="hero-funnel-inner">
          <div className="hero-funnel-row">
            <div className="hero-funnel-col1">
              <div className="hero-funnel-texts">
                <span className="hero-funnel-text1">MYRA</span>
                <span className="hero-funnel-text2">
                  Uncover, Optimize, and Future-Proof Your Pick/BASIC Codebase
                </span>
              </div>
              <span className="hero-funnel-text3">
                Introducing MYRA, a powerful code assistant to help your teams
                understand and manage your code base. MYRA seamlessly isolates
                user interactions from core business logic, providing clear
                insights into opportunities for modernization while flagging
                areas that may pose risks.
              </span>
              <ActionButton
                text1={
                  <Fragment>
                    <span className="hero-funnel-text4">Main CTA</span>
                  </Fragment>
                }
                rootClassName="action-buttonroot-class-name1"
              ></ActionButton>
            </div>
            <div className="hero-funnel-col2">
              <div className="hero-funnel-container2">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="hero-funnel-image"
                />
                <div resizable="True" className="hero-funnel-div">
                  <lottie-player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/7644ce42-8d6b-4987-a47a-659562057f2f/7c8668a3-af4d-49cc-a130-ec2f7cc01183"
                    loop
                    hover
                    speed={1}
                    autoplay="true"
                    resizable="True"
                    background="transparent"
                  ></lottie-player>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-funnel-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: 40px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: 64px;
          }
          .hero-funnel-inner {
            gap: 10px;
            flex: 0;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: stretch;
            padding-top: 100px;
            padding-left: 40px;
            padding-right: 40;
            flex-direction: column;
            padding-bottom: 100px;
            background-color: rgba(16, 20, 35, 1);
          }
          .hero-funnel-row {
            gap: 32px;
            width: 100%;
            display: flex;
            max-width: 1008px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-funnel-col1 {
            gap: 40px;
            width: 50%;
            display: flex;
            flex-grow: 1;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-funnel-texts {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-funnel-text1 {
            color: rgba(255, 92, 0, 1);
            height: auto;
            font-size: 20px;
            align-self: stretch;
            font-style: Mono Medium;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .hero-funnel-text2 {
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
          .hero-funnel-text3 {
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
          .hero-funnel-text4 {
            display: inline-block;
          }
          .hero-funnel-col2 {
            width: 50%;
            height: auto;
            display: flex;
            flex-grow: 1;
            min-width: auto;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .hero-funnel-container2 {
            display: grid;
            align-self: stretch;
          }
          .hero-funnel-image {
            width: 100%;
            z-index: 2;
            grid-row: 1;
            max-width: 738;
            grid-column: 1;
          }
          .hero-funnel-div {
            z-index: 0;
            grid-row: 1;
            grid-column: 1;
          }
          .hero-funnelroot-class-name {
            width: auto;
            align-self: center;
          }
          @media (max-width: 1024px) {
            .hero-funnel-container1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .hero-funnel-inner {
              padding-top: 64;
              padding-left: 40;
              padding-right: 40;
              padding-bottom: 64;
            }
            .hero-funnel-text2 {
              font-size: 38;
            }
            .hero-funnel-text3 {
              font-size: 18;
            }
            .hero-funnel-image {
              width: 292;
            }
          }
          @media (max-width: 650px) {
            .hero-funnel-container1 {
              padding-left: 0;
              padding-right: 0;
            }
            .hero-funnel-inner {
              padding-left: 16;
              padding-right: 16;
            }
            .hero-funnel-row {
              flex-wrap: wrap;
            }
            .hero-funnel-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

HeroFunnel.defaultProps = {
  rootClassName: '',
  imageSrc: '/dome.svg',
  imageAlt: 'image',
}

HeroFunnel.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default HeroFunnel
