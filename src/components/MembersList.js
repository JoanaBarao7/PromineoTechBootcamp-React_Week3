import  React from 'react';
import { Member } from './Member';
import { memberApi } from '../rest/MemberApi.js';
import { NewMemberForm } from './NewMemberForm';


export class MembersList extends React.Component {   
    state = {
        members: []   
    };

    componentDidMount() {
        this.fetchMembers();
    }

    fetchMembers =  async () => {
        const returnedMembers =  await memberApi.get();
        this.setState({ members: returnedMembers });
    };

    createMember = async (newMember) => {
        await memberApi.post(newMember);
        this.fetchMembers();
    };

    updateMember = async (updatedMember)  =>{
        await memberApi.put(updatedMember);
        this.fetchMembers();
    };

    deleteMember = async (memberId) => {
        await memberApi.delete(memberId);
        this.fetchMembers();
    }
   
    render() {
        console.log('In render: ' + this.state.members);
        const members = this.state.members
        ? this.state.members.map((member) =>
           <div className="round-corner container-fluid">
              <div className="single-recipe border p-2">
                <Member 
                    key={member._id}
                    member= {member}
                    updateMember={this.updateMember}
                /><br />
                <button className="btn-my-color rounded" onClick={e =>
                    this.deleteMember(member._id)}>Delete Member</button>
                    <br /><br />
               </div>
               <br /> <br /> 
            </div>)
        : null;
        console.log('Members in MemberList: ' + members);

        return (
            <div className="recipe-div p-2 border recipe-list">
                <h1>Library Books Checkout Form </h1>
                <div>
                    <ul>
                        {members}
                    </ul>               
                </div>   

                <div>
                    <NewMemberForm createMember={this.createMember}/>
                </div>
            </div>
        );
    };
};