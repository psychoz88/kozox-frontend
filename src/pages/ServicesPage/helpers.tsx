import React from 'react';

import earth from '../../images/earth.jpeg';
import mars from '../../images/mars.jpeg';
import moon from '../../images/moon.jpeg';
import neptune from '../../images/neptune.jpeg';
import solar from '../../images/solar.jpeg';
import uranus from '../../images/uranus.jpeg';

import {ABOUT_KOZOX} from 'constants/appConst';
import {EServices, EServicesIDs} from './types';

export const servicesList = [
  {content: EServices.WEB_AND_MOB_DEV, anchor: EServicesIDs.WEB_AND_MOB_DEV},
  {content: EServices.DEVOPS_SOLUTIONS, anchor: EServicesIDs.DEVOPS_SOLUTIONS},
  {
    content: EServices.ARCHITECTURE_DESIGN,
    anchor: EServicesIDs.ARCHITECTURE_DESIGN,
  },
  {content: EServices.POC_PROT_MVP, anchor: EServicesIDs.POC_PROT_MVP},
  {content: EServices.TESTIMG, anchor: EServicesIDs.TESTIMG},
  {content: EServices.DESIGN, anchor: EServicesIDs.DESIGN},
];

export const servicesBlocksData = [
  {
    title: EServices.WEB_AND_MOB_DEV,
    text: (
      <ul>
        <li>
          <p>
            Requirements definition: identifying customer needs and translating
            them into technical requirements
          </p>
        </li>
        <li>
          <p>
            API development: creating an application programming interface to
            support mobile functions
          </p>
        </li>
        <li>
          <p>
            Collaboration: cooperation with UX and UI designers, programmers,
            and other team members
          </p>
        </li>
        <li>
          <p>
            Application development and maintenance: creation of new and
            improvement of existing mobile applications
          </p>
        </li>
        <li>
          <p>
            Coding: development of applications in cooperation with the
            development team, ensuring proper communication between the backend
            and the frontend
          </p>
        </li>
      </ul>
    ),
    image: earth,
    anchor: EServicesIDs.WEB_AND_MOB_DEV,
  },
  {
    title: EServices.DEVOPS_SOLUTIONS,
    text: `Product planning at various stages of development: Planning, development, testing, implementation, 
      commissioning, compliance checks, operating system administration, and rapid customization of implemented solutions
    `,
    image: mars,
    anchor: EServicesIDs.DEVOPS_SOLUTIONS,
    isReverse: true,
  },
  {
    title: EServices.ARCHITECTURE_DESIGN,
    text: ABOUT_KOZOX, // TODO: provide information
    image: moon,
    anchor: EServicesIDs.ARCHITECTURE_DESIGN,
  },
  {
    title: EServices.POC_PROT_MVP,
    text: (
      <div>
        <p>
          Understanding how well the market reacts to the implemented idea and
          what kind of feedback there will be:{' '}
        </p>
        <ul>
          <li>minimum mandatory features;</li>
          <li>entails minimal costs;</li>
          <li>
            maximum data collection on product demand and customer behavior;
          </li>
        </ul>
        <p>
          Theoretical data on the results of technical analysis, market research
          and surveys, and reactions of potential customers to the announcement
          of the application/project.
        </p>
        <p>
          As a result, there is a lower probability of startup/project failure:
          an early understanding of the feasibility of the project and its
          potential implementation in the real market.
        </p>
      </div>
    ),
    image: neptune,
    anchor: EServicesIDs.POC_PROT_MVP,
    isReverse: true,
  },
  {
    title: EServices.TESTIMG,
    text: (
      <>
        <ul>
          <li>
            <p>Specification - a technical description of the product</p>
          </li>
          <li>
            <p>Test plan - a general plan for testing a product</p>
          </li>
          <li>
            <p>Checklist - a list of functionality to be tested</p>
          </li>
          <li>
            <p>
              Test case - a description of actions to test individual product
              functions
            </p>
          </li>
          <li>
            <p>Use case - scenarios of interaction with the product</p>
          </li>
          <li>
            <p>
              Bug report - a description of the bug and the steps that caused it
            </p>
          </li>
        </ul>
      </>
    ),
    image: solar,
    anchor: EServicesIDs.TESTIMG,
  },
  {
    title: EServices.DESIGN,
    text: (
      <div>
        <p>
          Designing, studying customer needs, building logical schemes of the
          interface. Working with an interface that includes such components as:
          graphic design, website architecture, interface responsiveness to
          specific user actions, and text comprehensibility.
        </p>
        <p>
          Visualization of the portal, which includes the graphic part of the
          interface. Correspondence of product and user interaction - competent
          organization of interface elements and maintaining a single style,
          which determines the logic and interaction of the user and the product
          as a whole.
        </p>
      </div>
    ),
    image: uranus,
    anchor: EServicesIDs.DESIGN,
    isReverse: true,
  },
];
