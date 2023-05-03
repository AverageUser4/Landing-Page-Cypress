import React from 'react';
import css from './WriteRunDebug.module.css';

import ProgressItem from '../ProgressItem/ProgressItem';

import { ReactComponent as LaptopSVG } from './assets/laptop.svg';
import { ReactComponent as ClockSVG } from './assets/clock.svg';
import debugSrc from './assets/debug.png';
import eliminateSrc from './assets/eliminate.png';
import gainSrc from './assets/gain.svg';
import integrateSrc from './assets/integrate.png';
import optimizeSrc from './assets/optimize.png';
import reviewSrc from './assets/review.svg';
import testSrc from './assets/test.png';
import writeSrc from './assets/write.png';
import int_1 from './assets/int-1.svg';
import int_2 from './assets/int-2.svg';
import int_3 from './assets/int-3.svg';
import int_4 from './assets/int-4.svg';
import int_5 from './assets/int-5.svg';
import int_6 from './assets/int-6.svg';

function WriteRunDebug() {
  return (
    <div className={css['container']}>
      <div className="max-width">
        <div className={css['heading']}>
          <LaptopSVG className={css['heading__icon']}/>
          <p className="para para--b para--medium">Introducing the Cypress App</p>
          <h2 className="head head--b head--medium">Write, run, and debug <span className="grad-text grad-text--a">like a pro</span></h2>
        </div>

        <div style={{ padding: 'clamp(32px, 5vw, 64px) 0' }}>
          <ProgressItem
            heading="Test modern apps directly in the browser"
            text="Watch your end-to-end and component tests run in real-time as you develop your applications. Cypress’s simple, yet powerful API runs as fast as your browser can render content."
            href="https://www.cypress.io/app"
            src={testSrc}
          />
          <ProgressItem
            heading="Write your first passing test in minutes"
            text="Installing Cypress and writing your first passing test is a breeze. There are no servers, drivers, or other dependencies to install or configure."
            href="https://www.cypress.io/app#delightful_experience"
            src={writeSrc}
          />
          <ProgressItem
            heading="Debug failures directly in the browser"
            text="Because Cypress runs directly in the browser, you can debug failed tests using the in-browser developer tools you already know and love."
            href="https://www.cypress.io/app#visual_debugging"
            src={debugSrc}
          />
          <ProgressItem
            heading="Eliminate flaky tests with ease"
            text="Cypress deterministically interacts with your application the same way as your users so you can discover intermittent bugs before your users do."
            href="https://www.cypress.io/app#flake_resistance"
            src={eliminateSrc}
          />
          <ProgressItem
            heading="Integrate Cypress with any CI provider"
            text="Easily integrate Cypress with your current CI provider. Run Cypress in CI and you will know as soon as there is a failure. We make it simple to run in CI. Use our Docker images or bring your own."
            href="https://www.cypress.io/cloud#integrated_workflows"
            src={[int_1, int_2, int_3, int_4, int_5, int_6]}
            type="special"
          />
          <ProgressItem
            type="break"
          >
            <div className={css['heading']}>
              <ClockSVG className={css['heading__icon']}/>
              <p className="para para--b para--medium">Introducing Cypress Cloud</p>
              <h2 className="head head--b head--medium">Increase your productivity and <span className="grad-text grad-text--a">confidence</span></h2>
            </div>
          </ProgressItem>
          <ProgressItem
            heading="Optimize your runs for a faster feedback loop"
            text="Run Cypress in your existing CI pipeline and use test parallelization, load balancing, spec prioritization, and more to be as efficient as possible with your available CI resources."
            href="https://www.cypress.io/cloud#smart_orchestration"
            src={optimizeSrc}
          />
          <ProgressItem
            heading="Review and debug failures visually"
            text="Reach new levels of visibility into why your tests failed in CI. Play back videos of your tests as they failed, read friendly stack trace errors, and never guess why another test failed."
            href="https://www.cypress.io/cloud#visual_reviews"
            src={reviewSrc}
          />
          <ProgressItem
            heading="Gain actionable insights into your test suite"
            text="Monitor your test suite’s health with in-depth analytics. Cypress surfaces failing and flaky test result trends and config changes that affect your test suite’s performance."
            href="https://www.cypress.io/cloud#test_analytics"
            src={gainSrc}
          />
          <ProgressItem
            heading="Integrate seamlessly into your workflow"
            text="Plug Cypress into any CI pipeline and you can manage test results as a team thanks to native integrations with Slack, GitHub, GitLab, JIRA, and more."
            href="https://www.cypress.io/cloud#integrated_workflows"
            src={integrateSrc}
          />
        </div>

        <div className={css['heading']}>
          <h2 className="head head--b head--medium">Loved by <span className="grad-text grad-text--b">OSS</span>, trusted by <span className="grad-text grad-text--a">Enterprise</span></h2>
          <p className="para para--b para--big para--weight-300">Cypress is proud to support developers all around the world by making it easier to build and test modern applications.</p>
        </div>
      </div>
    </div>
  );
}

export default WriteRunDebug;