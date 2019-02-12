import React, {Component} from 'react';
import AppHeader from '../../compontens/AppHeader'

class SportsEvent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isManagement: true,
            checkout: false,
        }
    }
    render(){
        return(
            <div>
                <AppHeader></AppHeader>
                我是项目页
            </div>

        )

    }

}
export  default  SportsEvent