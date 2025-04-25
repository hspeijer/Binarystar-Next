import React from 'react'

import { useTranslations } from 'next-intl'

const BlogCard = (props) => {
  return (
    <>
      <div className="blog-card-container">
        <div className="blog-card-blog-card">
          <div className="blog-card-image"></div>
          <div className="blog-card-body">
            <div className="blog-card-header">
              <div className="blog-card-title">
                <span className="blog-card-text1">The tale of BinaryStar</span>
                <button className="blog-card-circlebutton">
                  <div className="blog-card-arrowrightline">
                    <div className="blog-card-group">
                      <img
                        alt="VectorI2184"
                        src="/external/vectori2184-y58p.svg"
                        className="blog-card-vector"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <span className="blog-card-text2">
                How do you create compelling presentations that wow your
                colleagues and impress your managers? Find out with our in-depth
                guide on UX presentations.
              </span>
              <div className="blog-card-labels">
                <div className="blog-card-blog-badge1">
                  <span className="blog-card-text3">Design</span>
                </div>
                <div className="blog-card-blog-badge2">
                  <span className="blog-card-text4">Research</span>
                </div>
                <div className="blog-card-blog-badge3">
                  <span className="blog-card-text5">Presentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-card-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-card-blog-card {
            width: 100%;
            height: auto;
            display: flex;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(208, 213, 221, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .blog-card-image {
            height: 280px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .blog-card-body {
            gap: 56px;
            display: flex;
            padding: 40px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .blog-card-header {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-card-title {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .blog-card-text1 {
            color: rgba(16, 20, 35, 1);
            height: auto;
            flex-grow: 1;
            font-size: 28px;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-card-circlebutton {
            gap: 44px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-radius: 999px;
            justify-content: center;
            background-color: rgba(255, 92, 0, 0.10000000149011612);
          }
          .blog-card-arrowrightline {
            width: 22px;
            height: 22px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .blog-card-group {
            top: 0px;
            left: 0px;
            width: 22px;
            height: 22px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .blog-card-vector {
            top: 3.870166778564453px;
            left: 3.6666667461395264px;
            width: 15px;
            height: 14px;
            position: absolute;
          }
          .blog-card-text2 {
            color: rgba(104, 114, 125, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Roobert TRIAL;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-card-labels {
            gap: 8px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .blog-card-blog-badge1 {
            display: flex;
            padding: 4px 12px;
            align-items: center;
            background-color: rgba(56, 99, 255, 0.10000000149011612);
          }
          .blog-card-text3 {
            color: rgba(56, 99, 255, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: center;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-card-blog-badge2 {
            display: flex;
            padding: 4px 12px;
            align-items: center;
            background-color: rgba(56, 99, 255, 0.10000000149011612);
          }
          .blog-card-text4 {
            color: rgba(56, 99, 255, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: center;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-card-blog-badge3 {
            display: flex;
            padding: 4px 12px;
            align-items: center;
            background-color: rgba(56, 99, 255, 0.10000000149011612);
          }
          .blog-card-text5 {
            color: rgba(56, 99, 255, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: center;
            font-family: Roobert TRIAL;
            font-weight: 500;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default BlogCard
