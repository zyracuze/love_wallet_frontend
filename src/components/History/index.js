import React, { Component } from 'react'
// import { moduleName } from 'react-native'
import { Nav, NavItem, Table } from 'react-bootstrap'


const style = {
    textAlign: 'center',
    cursor: 'pointer'
}

class History extends Component {

    state = {
        nowTab: 1
    }

    handleSelect(selectedKey) {
        this.setState({nowTab: selectedKey})
        alert('selected ' + selectedKey);
      }

    loadMore() {
        alert('fdsfsfa')
    }

    render() {
        return (
            <div>
                <Nav bsStyle="tabs" activeKey={this.state.nowTab} onSelect={this.handleSelect.bind(this)}>
                    <NavItem id="sdfsdf" eventKey={1}>History</NavItem>
                    <NavItem eventKey={2}>เติมเงิน</NavItem>
                    <NavItem eventKey={3}>จ่ายเงิน</NavItem>
                </Nav>
                <Table striped condensed hover>
                    <thead>
                        <tr>
                            <th>Date / Time</th>
                            <th>By</th>
                            <th>จำนวนเงิน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>9:00</td>
                            <td>Debit</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>12:00</td>
                            <td>Coffee</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td style={style} onClick={this.loadMore.bind(this)} colSpan="3">Load More ...</td>
                        </tr>
                    </tbody>
                </Table>
          </div>
        )
    }
}

export default History

