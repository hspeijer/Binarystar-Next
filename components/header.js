import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <nav className="header-navbar">
          <div className="header-inner">
            <img
              alt="BinaryStarLogoI1386"
              src="/external/binarystarlogoi1386-nf4l.svg"
              className="header-binary-star-logo"
            />
            <div className="header-items Content">
              <div className="header-products-services-dropdown">
                <div className="header-link-secondarydown">
                  <span className="header-text1">Solutions</span>
                  <div className="header-arrowdownsline">
                    <div className="header-group1">
                      <img
                        alt="VectorI1386"
                        src="/external/vectori1386-6hvo.svg"
                        className="header-vector1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-link-secondary1">
                <span className="header-text2">Case studies</span>
              </div>
              <div className="header-link-secondary2">
                <span className="header-text3">About us</span>
              </div>
            </div>
            <div className="header-link-secondary3">
              <span className="header-text4">Contact us</span>
              <div className="header-icon">
                <div className="header-arrowrightline">
                  <div className="header-group2">
                    <img
                      alt="VectorI1386"
                      src="/external/vectori1386-m8po.svg"
                      className="header-vector2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-secondary2);
          }
          .header-navbar {
            gap: 317px;
            height: auto;
            padding: 40px 112px;
            max-width: 1440px;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            white-space: nowrap;
            background-color: rgba(245, 245, 245, 1);
          }
          .header-inner {
            gap: 309px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: space-between;
          }
          .header-binary-star-logo {
            width: 175px;
            height: 28px;
          }
          .header-items {
            gap: 48px;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-products-services-dropdown {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-link-secondarydown {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .header-text1 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-arrowdownsline {
            width: 20px;
            height: 20px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .header-group1 {
            top: 0px;
            left: 0px;
            width: 20px;
            height: 20px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .header-vector1 {
            top: 6.8516669273376465px;
            left: 4.696666717529297px;
            width: 11px;
            height: 6px;
            position: absolute;
          }
          .header-link-secondary1 {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .header-text2 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-link-secondary2 {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .header-text3 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-weight: 500;
            line-height: 24px;
            white-space: no-wrap;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-link-secondary3 {
            gap: 6px;
            display: flex;
            align-items: center;
          }
          .header-text4 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .header-icon {
            gap: 10px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .header-arrowrightline {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .header-group2 {
            top: 0px;
            left: 0px;
            width: 24px;
            height: 24px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .header-vector2 {
            top: 4.2220001220703125px;
            left: 4px;
            width: 16px;
            height: 16px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
