import React from 'react'

import { useTranslations } from 'next-intl'

const TypeCheckOrange = (props) => {
  return (
    <>
      <div className="type-check-orange-container">
        <div className="type-check-orange-outer">
          <div className="type-check-orange-inner">
            <div className="type-check-orange-card">
              <div className="type-check-orange-texts">
                <div className="type-check-orange-card-list-item1">
                  <div className="type-check-orange-icon1">
                    <div className="type-check-orange-custom-icon1">
                      <img
                        alt="circlecheckbigI187"
                        src="/external/circlecheckbigi187-rkk.svg"
                        className="type-check-orange-circlecheckbig1"
                      />
                    </div>
                  </div>
                  <span className="type-check-orange-text1">
                    By equipping your teams with deeper visibility and
                    actionable intelligence, MYRA accelerates digital
                    transformation initiatives, reduces technical debt, and
                    ensures a future-ready technology stack.
                  </span>
                </div>
                <div className="type-check-orange-card-list-item2">
                  <div className="type-check-orange-icon2">
                    <div className="type-check-orange-custom-icon2">
                      <img
                        alt="circlecheckbigI187"
                        src="/external/circlecheckbigi187-rkk.svg"
                        className="type-check-orange-circlecheckbig2"
                      />
                    </div>
                  </div>
                  <span className="type-check-orange-text2">
                    We welcome the opportunity to discuss how MYRA aligns with
                    your strategic goals.
                  </span>
                </div>
              </div>
              <div className="type-check-orange-pattern"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .type-check-orange-container {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .type-check-orange-outer {
            width: 100%;
            height: auto;
            display: flex;
            padding: 100px 0;
            max-width: 1440;
            align-self: center;
            align-items: center;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .type-check-orange-inner {
            gap: 80px;
            width: 100%;
            display: flex;
            max-width: 1216px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .type-check-orange-card {
            gap: 24px;
            display: flex;
            padding: 64px 320px 64px 64px;
            overflow: hidden;
            position: relative;
            font-size: 24;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(245, 245, 245, 1);
          }
          .type-check-orange-texts {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .type-check-orange-card-list-item1 {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            background-color: rgba(245, 245, 245, 1);
          }
          .type-check-orange-icon1 {
            gap: 10px;
            height: 42px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .type-check-orange-custom-icon1 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .type-check-orange-circlecheckbig1 {
            width: 32px;
            height: 32px;
          }
          .type-check-orange-text1 {
            color: rgba(16, 20, 35, 1);
            width: auto;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .type-check-orange-card-list-item2 {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            background-color: rgba(245, 245, 245, 1);
          }
          .type-check-orange-icon2 {
            gap: 10px;
            height: 42px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .type-check-orange-custom-icon2 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .type-check-orange-circlecheckbig2 {
            width: 32px;
            height: 32px;
          }
          .type-check-orange-text2 {
            color: rgba(16, 20, 35, 1);
            width: auto;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .type-check-orange-pattern {
            display: flex;
            z-index: 1;
            align-items: flex-start;
          }
          @media (max-width: 1024px) {
            .type-check-orange-outer {
              padding: 0px;
            }
            .type-check-orange-card {
              font-size: 20;
              padding-top: 80px;
              padding-left: 32px;
              padding-right: 72px;
              padding-bottom: 180px;
            }
            .type-check-orange-text1 {
              font-size: 20;
            }
            .type-check-orange-text2 {
              color: rgb(16, 20, 35);
              font-size: 20px;
              font-family: Roobert TRIAL;
              font-weight: 400;
              line-height: 150%;
              text-decoration: none;
            }
          }
          @media (max-width: 650px) {
            .type-check-orange-card {
              padding-top: 64px;
              padding-left: 16px;
              padding-right: 16px;
              padding-bottom: 64px;
            }
            .type-check-orange-card-list-item1 {
              flex-direction: column;
            }
            .type-check-orange-card-list-item2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default TypeCheckOrange
