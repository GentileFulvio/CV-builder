import React, { Component, ReactNode } from 'react';

import i18n from '../../../i18n';

import Button from '../../../components/buttons/Button.view';
import Title from '../../../components/Title.view';
import Subtitle from '../../../components/Subtitle.view';
import Details from '../accordion_details/AccordionDetails.container';
import { addBlock } from '../../utils/functions';

import { Container } from './Education.style';

type State = {
  rows: number[];
  clicks: number;
};

type Props = {
  currentStep: number;
};

class Education extends Component<Props, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  addEducationBlock = () => {
    addBlock(this);
  };

  renderBlock = (): JSX.Element[] => {
    return this.state.rows.map((index, el) => {
      return <Details context="education" key={el} id={el} />;
    });
  };

  render(): ReactNode {
    if (this.props.currentStep !== 4) {
      return null;
    }

    return (
      <Container>
        <Title>{i18n.t('add_education')}</Title>
        <Subtitle>{i18n.t('education_subtitle')}</Subtitle>
        {this.renderBlock()}
        <Button typology="link" onClick={this.addEducationBlock} color="primary">
          {i18n.t('add_education')}
        </Button>
      </Container>
    );
  }
}

export default Education;
