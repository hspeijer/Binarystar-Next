import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestColumns = (props) => {
  return (
    <>
      <div className="test-columns-container1">
        <div className="test-columns-container2">
          <div className="test-columns-container3">
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="test-columns-text3">
                    Lorem ipsum doretLorem ipsum doretLorem ipsum doretLorem
                    ipsum doretLorem ipsum doretLorem ipsum doret
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="test-columns-container4">
            <span>
              {props.text1 ?? (
                <Fragment>
                  <span className="test-columns-text4">
                    Lorem ipsum doretLorem ipsum doretLorem ipsum doretLorem
                    ipsum doretLorem ipsum doretLorem ipsum doret
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .test-columns-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
          }
          .test-columns-container2 {
            gap: 20px;
            display: flex;
            align-items: stretch;
          }
          .test-columns-container3 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            border-color: #ff0000;
            border-style: dashed;
            border-width: 2px;
            flex-direction: column;
          }
          .test-columns-container4 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            border-color: #ffeb00;
            border-style: dashed;
            border-width: 2px;
            flex-direction: column;
          }
          .test-columns-text3 {
            display: inline-block;
          }
          .test-columns-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TestColumns.defaultProps = {
  text: undefined,
  text1: undefined,
}

TestColumns.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
}

export default TestColumns
