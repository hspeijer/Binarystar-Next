import React from 'react'

import { useTranslations } from 'next-intl'

const TitleCard = (props) => {
  return (
    <>
      <div className="title-card-container">
        <div className="title-card-rows2-device-desktop">
          <div className="title-card-inner">
            <div className="title-card-fancy-heading">
              <div className="title-card-heading">
                <span className="title-card-text1">Objectives</span>
              </div>
              <div className="title-card-description">
                <span className="title-card-text2">
                  Transform your development process and stay ahead of the
                  competition with MYRA’s intelligent insights.
                </span>
              </div>
            </div>
            <div className="title-card-grid">
              <div className="titleCard">
                <div className="title-card-item1">
                  <div className="title-card-header1">
                    <div className="title-card-custom-icon1">
                      <img
                        alt="IconI187"
                        src="/external/iconi187-0uu.svg"
                        className="title-card-icon1"
                      />
                    </div>
                    <span className="title-card-text3">Eliminate Debt</span>
                  </div>
                </div>
              </div>
              <div className="titleCard">
                <div className="title-card-item2">
                  <div className="title-card-header2">
                    <div className="title-card-custom-icon2">
                      <img
                        alt="IconI187"
                        src="/external/iconi187-0uu.svg"
                        className="title-card-icon2"
                      />
                    </div>
                    <span className="title-card-text4">Boost Performance</span>
                  </div>
                </div>
              </div>
              <div className="titleCard">
                <div className="title-card-item3">
                  <div className="title-card-header3">
                    <div className="title-card-custom-icon3">
                      <img
                        alt="IconI187"
                        src="/external/iconi187-0uu.svg"
                        className="title-card-icon3"
                      />
                    </div>
                    <span className="title-card-text5">Grow Chesthair</span>
                  </div>
                </div>
              </div>
              <div className="titleCard">
                <div className="title-card-item4">
                  <div className="title-card-header4">
                    <div className="title-card-custom-icon4">
                      <img
                        alt="IconI187"
                        src="/external/iconi187-0uu.svg"
                        className="title-card-icon4"
                      />
                    </div>
                    <span className="title-card-text6">Make Breakfast</span>
                  </div>
                </div>
              </div>
              <div className="titleCard">
                <div className="title-card-item5">
                  <div className="title-card-header5">
                    <div className="title-card-custom-icon5">
                      <img
                        alt="IconI187"
                        src="/external/iconi187-0uu.svg"
                        className="title-card-icon5"
                      />
                    </div>
                    <span className="title-card-text7">Water Plants</span>
                  </div>
                </div>
              </div>
              <div className="titleCard">
                <div className="title-card-item6">
                  <div className="title-card-header6">
                    <div className="title-card-custom-icon6">
                      <img
                        alt="IconI187"
                        src="/external/iconi187-0uu.svg"
                        className="title-card-icon6"
                      />
                    </div>
                    <span className="title-card-text8">Eliminate Debt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .title-card-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-rows2-device-desktop {
            width: 100%;
            height: auto;
            display: flex;
            padding: 100px 0;
            max-width: 1440;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .title-card-inner {
            gap: 80px;
            width: 1216px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .title-card-fancy-heading {
            display: flex;
            max-width: 1008;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .title-card-heading {
            gap: 10px;
            width: 488px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .title-card-text1 {
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
          .title-card-description {
            gap: 10px;
            width: 384px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .title-card-text2 {
            color: rgba(104, 114, 125, 1);
            height: auto;
            flex-grow: 1;
            font-size: 20px;
            font-style: Regular;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .title-card-grid {
            gap: -1px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .title-card-item1 {
            gap: 64px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .title-card-header1 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-custom-icon1 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .title-card-icon1 {
            width: 48px;
            height: 48px;
          }
          .title-card-text3 {
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
          .title-card-item2 {
            gap: 64px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .title-card-header2 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-custom-icon2 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .title-card-icon2 {
            width: 48px;
            height: 48px;
          }
          .title-card-text4 {
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
          .title-card-item3 {
            gap: 64px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .title-card-header3 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-custom-icon3 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .title-card-icon3 {
            width: 48px;
            height: 48px;
          }
          .title-card-text5 {
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
          .title-card-item4 {
            gap: 64px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .title-card-header4 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-custom-icon4 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .title-card-icon4 {
            width: 48px;
            height: 48px;
          }
          .title-card-text6 {
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
          .title-card-item5 {
            gap: 64px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .title-card-header5 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-custom-icon5 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .title-card-icon5 {
            width: 48px;
            height: 48px;
          }
          .title-card-text7 {
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
          .title-card-item6 {
            gap: 64px;
            display: flex;
            padding: 48px;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .title-card-header6 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-card-custom-icon6 {
            gap: 10px;
            width: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .title-card-icon6 {
            width: 48px;
            height: 48px;
          }
          .title-card-text8 {
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
          @media (max-width: 1024px) {
            .title-card-fancy-heading {
              flex-direction: column;
            }
            .title-card-text1 {
              align-self: center;
              text-align: center;
            }
            .title-card-description {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default TitleCard
