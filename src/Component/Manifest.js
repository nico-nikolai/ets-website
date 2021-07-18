import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import INVENTORY from '../Assets/Images/ETS-INVENTORY-Web-Inventory-July21.jpg';
import INVENTORY2 from '../Assets/Images/ETS-INVENTORY-Web-Inventory-July21-page-2.jpg';

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

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} contentClassName="custom-modal-size" >
            {/* <ModalHeader toggle={this.toggleModal}>Gear Manifest</ModalHeader> */}
            <ModalBody>
              <img src={INVENTORY} alt="Inventory 1" />
              <img src={INVENTORY2} alt="Inventory 2" />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
