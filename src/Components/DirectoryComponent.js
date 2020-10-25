import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTech: null
        };
    }

    onTechSelect(tech) {
        this.setState({selectedTech: tech});
    }

    renderSelectedTech(tech) {
        if (tech) {
            return (
                <Card>
                    <CardImg top src={tech.image} alt={tech.name} />
                    <CardBody>
                        <CardTitle>{tech.name}</CardTitle>
                        <CardText>{tech.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.tech.map(tech => {
            return (
                <div key={tech.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onTechSelect(tech)}>
                        <CardImg width="100%" src={tech.image} alt={tech.name} />
                        <CardImgOverlay>
                            <CardTitle>{tech.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedTech(this.state.selectedTech)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;