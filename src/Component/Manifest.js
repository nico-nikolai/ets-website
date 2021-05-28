import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default class Manifest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  render() {

    return (
      <div>
        <div className="btns partners-btn">
          <Button onClick={this.toggleModal} className="theme-btn">
            Our Gear
          </Button>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Gear Manifest</ModalHeader>
            <ModalBody>This will be a file Eric provides</ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
