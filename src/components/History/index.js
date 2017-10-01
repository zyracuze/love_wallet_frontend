import React, { Component } from 'react'
// import { moduleName } from 'react-native'
import { Nav, NavItem, Table } from 'react-bootstrap'


const style = {
    textAlign: 'right'
}

const format2 = (n) => {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

const twoDigits = (number) => ("0" + number).slice(-2)

class History extends Component {

    state = {
        nowTab: 1
    }

    data = [
        {
            t_date: "1483228800000",
            amount: 500,
            user_id: 1,
            payment_method: "TopUp-Debit Card",
            order_id: null
        },
        {
            t_date: "1483228800000",
            amount: 1000,
            user_id: 1,
            payment_method: "TopUp-Card",
            order_id: null
        },
        {
            t_date: "1483228800000",
            amount: 1000,
            user_id: 1,
            payment_method: "Paid",
            order_id: 1
        },

    ]

    handleSelect(selectedKey) {
        this.setState({nowTab: selectedKey})
        alert('selected ' + selectedKey);
      }

    loadMore() {
        alert('fdsfsfa')
    }

    changeTimestampToDate(datetime) {
        // datetime = parseInt(datetime)
        const monthsName = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.']
        datetime = Date.now()
        const date = new Date(datetime)
        return date.getDate() + ' ' + monthsName[date.getMonth()] + ' ' + (date.getFullYear() + 543) + '  ' + twoDigits(date.getHours()) + '.' + twoDigits(date.getMinutes()) + ' น.'
    }

    componentWillMount() {
    //     const url = ''
    //     fetch(url)
    //     .then(function(response) {
    //     if (response.status >= 400) {
    //        throw new Error("Bad response from server");
    //     }
    //     return response.json();
    //   })
    //   .then(function(data) {
    //      this.data = data
    //   });
    }
    

    render() {
        return (
            <div>
                <Nav bsStyle="tabs" activeKey={this.state.nowTab} onSelect={this.handleSelect.bind(this)}>
                    <NavItem eventKey={1}>History</NavItem>
                </Nav>
                <Table striped condensed hover>
                    <thead>
                        <tr>
                            <th>วัน / เวลา</th>
                            <th>ประเภท</th>
                            <th style={style}>จำนวนเงิน (บาท)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.data.map((data, index) => {
                            return (
                                <tr>
                                    <td id={'history_table_datetime_' + (index + 1)} >{this.changeTimestampToDate(data.t_date)}</td>
                                    <td id={'history_table_by_' + (index + 1)}>{data.payment_method}</td>
                                    <td style={style} id={'history_table_amount_' + (index + 1)}>{format2(data.amount)}</td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td style={style} onClick={this.loadMore.bind(this)} colSpan="3">Load More ...</td>
                        </tr> */}
                    </tbody>
                </Table>
          </div>
        )
    }
}

export default History

