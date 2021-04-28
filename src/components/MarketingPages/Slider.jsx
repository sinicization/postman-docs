import './_slider.scss';
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import chooseVerbVideo from '../../assets/choose-verb.mp4';
import sendVideo from '../../assets/send.mp4';
import enterUrlVideo from '../../assets/enter-url.mp4';

// implemented with react-tabs plugin https://github.com/reactjs/react-tabs

const Slider = () => (
  <section id="send-a-request">
    <h2 className="send-a-request__header">1. 发送一个请求</h2>
    <Tabs forceRenderTabPanel>
      <TabList>
        <Tab>
          <span className="number">1</span>
          选择你的动词
        </Tab>
        <Tab>
          <span className="number">2</span>
          输入一个URL
        </Tab>
        <Tab>
          <span className="number">3</span>
          发送一个请求
        </Tab>
      </TabList>

      <TabPanel>
        <div className="send-a-request-content">
          <video
            className="send-a-request-content-video"
            src={chooseVerbVideo}
            autoPlay
            loop
          />
          <div className="send-a-request-content-text">
            <h3 className="send-a-request-content-text-title">
              选择你的动词
            </h3>
            <div className="send-a-request-content-text-description">
              <p>
                在此示例中,我们将发出一个GET请求来从服务器
                检索数据.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="send-a-request-content">
          <video
            className="send-a-request-content-video"
            src={enterUrlVideo}
            autoPlay
            loop
          />
          <div className="send-a-request-content-text">
            <h3 className="send-a-request-content-text-title">输入一个URL</h3>
            <div className="send-a-request-content-text-description">
              <p>现在,让我们发送第一个API请求!</p>
              <p>
                输入
                {' '}
                <span>postman-echo.com/get</span>
                {' '}
                在URL字段中.
                {' '}
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="send-a-request-content">
          <video
            className="send-a-request-content-video"
            src={sendVideo}
            autoPlay
            loop
          />
          <div className="send-a-request-content-text">
            <h3 className="send-a-request-content-text-title">
              发送一个请求
            </h3>
            <div className="send-a-request-content-text-description">
              <p>
                点击&quot;发送&quot;按钮并检查返回的响应
                正文.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  </section>
);

export default Slider;
