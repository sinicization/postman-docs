import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import uuidv4 from 'uuid/v4';
import Layout from '../components/layout';
import SEO from '../components/seo';

import upcomingEvents from '../../bff-data/events.json';

import HeroImage from '../assets/postman-workspaces-personal-postmanaut.png';
import AdminImage from '../assets/team-collaboration-postmanaut-pic.png';
import ResourceImage from '../assets/integrations-intro-pic.png';
import LearnImage from '../assets/postmanaut-intro-pic.png';

import { SecondaryCard, LandingCard } from '../components/MarketingPages/Cards';
import '../components/MarketingPages/Buttons.scss';

import './index.scss';

const heroBackground = {
  backgroundColor: '#eaf2f8',
};
const videoBackground = {
  backgroundColor: 'rgb(245, 248, 251)',
};

const getSupString = (dateOfMonth) => {
  if (dateOfMonth >= 4 && dateOfMonth <= 20) {
    return 'th';
  } if (dateOfMonth >= 24 && dateOfMonth <= 30) {
    return 'th';
  } if (dateOfMonth === 1 || dateOfMonth === 21 || dateOfMonth === 31) {
    return 'st';
  } if (dateOfMonth === 2 || dateOfMonth === 22) {
    return 'nd';
  } if (dateOfMonth === 3 || dateOfMonth === 23) {
    return 'rd';
  }
  return null;
};

class IndexPage extends React.Component {
  componentDidMount() {
    const pix = document.createElement('script');
    pix.language = 'JavaScript1.1';
    pix.src = '//pixel.mathtag.com/event/js?mt_id=1538259&mt_adid=244742&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=';
    pix.async = true;
    document.body.appendChild(pix);
  }

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // If, upcomingEvents is an array, sort the events array by date, and filter out past events.
    // Else, leave as is.. which is an object with upcomingEvents.development = true
    const sortedUpcomingEvents = Array.isArray(upcomingEvents)
      ? upcomingEvents.sort((a, b) => (new Date(a.date) - new Date(b.date)))
        .filter((event) => new Date(event.expiration) > new Date())
      : upcomingEvents;

    return (
      <Layout>
        <SEO title="Home" slug="/" />
        <section className="row section" style={heroBackground}>
          <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
            <h1>Postman学习中心</h1>
            <p>
              了解如何使用Postman.
              {' '}
              <br />
              查看文档和支持资源!
            </p>
            <a href="/docs/getting-started/introduction/" className="btn btn__primary mb-5">探索文档</a>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-6 align-self-center">
            <img src={HeroImage} width="637" height="411" className="hero-image img-fluid" alt="Postmanaut sitting at computer. Illustration." />
          </div>
        </section>

        <section className="row section">
          <div className="col-sm-12 text-center">
            <h2 className="mb-5">在您的API项目上设计、开发和协作</h2>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <LandingCard
                  title="开始使用"
                  description="只需点击几下即可在Postman中发送您的第一个API请求!"
                  cta="发送一个请求"
                  link="/docs/getting-started/sending-the-first-request/"
                  icon={LearnImage}
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <LandingCard
                  title="测试"
                  description="编写测试脚本并将自动化构建到您的工作流程中."
                  link="/docs/writing-scripts/intro-to-scripts/"
                  cta="创建测试"
                  icon={ResourceImage}
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <LandingCard
                  title="管理"
                  description="管理您的帐户并建立团队以取得成功."
                  link="/docs/administration/managing-your-team/managing-your-team/"
                  cta="管理Postman"
                  icon={AdminImage}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <SecondaryCard
                  title="社区"
                  description="在我们的论坛上连接到Postman社区."
                  cta="访问论坛"
                  ctaLink="https://community.postman.com/"
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <SecondaryCard
                  title="Postman网络"
                  description="查找可以在Postman内部进行交互的模板,工作区和API."
                  cta="浏览Postman"
                  ctaLink="https://www.postman.com/explore"
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <SecondaryCard
                  title="视频"
                  description="从我们的视频播放列表中学习Postman技能."
                  cta="观看视频"
                  ctaLink="https://www.youtube.com/postmanapidevelopment"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="row section" style={videoBackground}>
          <div className="col-lg-4 order-lg-1">
            <h2>Postman简介</h2>
            <p>在此视频课程中为初学者学习Postman基础知识.</p>
            <p className="mb-4">发送和授权一个请求,编写测试脚本以及将请求链接在一起.</p>
          </div>
          <div className="col-lg-8 order-lg-13">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/7E60ZttwIpY?rel=0" allowFullScreen />
            </div>
          </div>
        </section>
        <section className="row section">
          <div className="col-md-4">
            <h2>即将到来的Postman直播</h2>
            <p>
              在Twitch上
              <a href="https://www.twitch.tv/getpostman" target="_blank" rel="noopener noreferrer">关注我们</a>
              或
              <a href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw" target="_blank" rel="noopener noreferrer">订阅</a>
              我们的YouTube频道,让我们上线时您不会错过.
            </p>
          </div>
          <div className="col-md-8">
            {/* If there are events in the events.json array */}
            {sortedUpcomingEvents.length > 0 ? (
              // Map over, get the appropriate sup text value, and render event.
              sortedUpcomingEvents.map((event) => {
                const dateObject = new Date(event.date);
                return (
                  <p key={uuidv4()}>
                    <strong>
                      {`${months[dateObject.getUTCMonth()]} ${dateObject.getDate()}`}
                      <sup>{getSupString(dateObject.getDate())}</sup>
                      {' '}
                      -
                    </strong>
                    {' '}
                    <OutboundLink href={event.link} target="_blank" rel="noopener noreferrer">
                      {event.title}
                    </OutboundLink>
                    {`: ${event.description}`}
                  </p>
                );
              })
            ) : (
              <>
                {/* If there are no events, and events.json is an object where development eq true */}
                {(!Array.isArray(upcomingEvents) && upcomingEvents.development) ? (
                  <div className="events__alert" role="alert">
                    <p>
                      您目前处于开发模式. 动态事件将不会在本地显示.
                      <a style={{ fontSize: 'inherit' }} href="https://github.com/postmanlabs/postman-docs/blob/develop/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">有关详细信息,请参见贡献文档</a>
                      .
                    </p>
                  </div>
                ) : (
                  <>
                    {/* else we know we have 0 upcoming events, and we are not in development mode */}
                    <p>我们目前没有即将发生的事件...稍后再回来查看.</p>
                  </>
                )}
              </>
            )}
          </div>
        </section>

        <section className="row section justify-content-center">
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Postman支持"
              description="联系我们的支持团队."
              cta="开票"
              ctaLink="https://support.postman.com/hc/en-us/requests/new/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Bug和功能请求"
              description="查看应用程序支持."
              cta="提出一个请求"
              ctaLink="https://github.com/postmanlabs/postman-app-support/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="产品路线图"
              description="找出我们正在做的事情."
              cta="查看路线图"
              ctaLink="https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers"
            />
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;
