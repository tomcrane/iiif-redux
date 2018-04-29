import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as currentCanvas from 'iiif-redux/es/api/current-canvas';
import { createStructuredSelector } from 'reselect';
import { Row, Col, Layout } from 'antd';
import StructuralPanel from '../StructuralPanel/StructuralPanel';
import DescriptivePanel from '../DescriptivePanel/DescriptivePanel';
import LinkingPanel from '../LinkingPanel/LinkingPanel';
import TechnicalPanel from '../TechnicalPanel/TechnicalPanel';
const { Content } = Layout;

class Canvas extends Component {
  render() {
    const { onClickImage, onClickOtherContent } = this.props;
    return (
      <Content>
        <Row gutter={16} style={{ padding: 15 }}>
          <Col span={8}>
            <TechnicalPanel
              id={this.props.id}
              type={this.props.type}
              viewingHint={this.props.viewingHint}
              height={this.props.height}
              width={this.props.width}
            />
            <DescriptivePanel
              label={this.props.label}
              description={this.props.description}
              metadata={this.props.metadata}
              attribution={this.props.attribution}
              logo={this.props.logo}
              license={this.props.license}
              thumbnail={this.props.thumbnail}
            />
            <StructuralPanel
              images={this.props.images}
              otherContent={this.props.otherContent}
            />
            <LinkingPanel
              seeAlso={this.props.seeAlso}
              service={this.props.service}
              related={this.props.related}
              within={this.props.within}
              startCanvas={this.props.startCanvas}
            />
          </Col>
          <Col span={16}>
            {this.props.images.map((image, key) => {
              return <div key={key} />;
            })}
          </Col>
        </Row>
      </Content>
    );
  }
}

export default connect(
  createStructuredSelector({
    // Technical
    id: currentCanvas.getId,
    type: currentCanvas.getType,
    viewingHint: currentCanvas.getViewingHint,
    height: currentCanvas.getHeight,
    width: currentCanvas.getWidth,
    // Descriptive
    label: currentCanvas.getLabel,
    description: currentCanvas.getDescription,
    metadata: currentCanvas.getMetadata,
    attribution: currentCanvas.getAttribution,
    logo: currentCanvas.getLogo,
    license: currentCanvas.getLicense,
    thumbnail: currentCanvas.getThumbnail,
    // Linking
    within: currentCanvas.getWithin,
    rendering: currentCanvas.getRendering,
    related: currentCanvas.getRelated,
    service: currentCanvas.getService,
    seeAlso: currentCanvas.getSeeAlso,
    // Structural
    images: currentCanvas.getImages,
    otherContent: currentCanvas.getOtherContent,
    // Other
    imageService: currentCanvas.getImageService,
  })
)(Canvas);
