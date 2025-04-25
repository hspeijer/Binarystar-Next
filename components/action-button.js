import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ActionButton = (props) => {
  return (
    <>
      <div className={`primary ${props.rootClassName} `}>
        <div className="action-button-bracket-left bracketLeft"></div>
        <div className="action-button-content content">
          <span className="Button1">
            {props.text1 ?? (
              <Fragment>
                <span className="action-button-text2">Main CTA</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="action-button-bracket-right bracketRight"></div>
      </div>
      <style jsx>
        {`
          .action-button-bracket-left {
            left: 0;
            position: relative;
          }

          .action-button-content {
            background-color: var(--dl-color-binarystar-secondary-color);
          }
          .action-button-bracket-right {
            left: 0;
            display: inline-block;
            postion: relative;
          }
          .action-button-text2 {
            display: inline-block;
          }

          @media (max-width: 1024px) {
            .action-button-bracket-right {
              left: 0;
              position: relative;
            }
          }
        `}
      </style>
    </>
  )
}

ActionButton.defaultProps = {
  rootClassName: '',
  text1: undefined,
}

ActionButton.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
}

export default ActionButton
