const MEMBER_ENDPOINT = 'https://crudcrud.com/api/5b835c8e4fd54c308320ec17639bef8d/members';

class MemberApi {
    get = async () => {
        try {
            console.log(MEMBER_ENDPOINT)
            const resp = await fetch(MEMBER_ENDPOINT);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchMembers had an issue.', e);
        }
       
    }

    post = async (member) => {
        try {
            const resp = await fetch(`${MEMBER_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(member)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like posting members had an issue.', e);
        }  
    }

    put = async (member) => {
        try {
            console.log(MEMBER_ENDPOINT);
            const resp = await fetch(`${MEMBER_ENDPOINT}/${member._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({"name" : member.name, "numberId" : member.numberId, "lastName": member.lastName, "books" : member.books}),
            });
            console.log(resp);
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating members had an issue.', e);
        }  
    }

    delete = async (memberId) => {
        try {
            console.log(MEMBER_ENDPOINT);
            const resp = await fetch(`${MEMBER_ENDPOINT}/${memberId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Oops, looks like delete member had an issue.',e);
        }
    }
}


export const memberApi = new MemberApi();