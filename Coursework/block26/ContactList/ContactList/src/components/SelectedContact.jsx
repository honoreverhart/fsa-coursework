


export default function SelectedContact({setSelectedContactId, selectedContactId}){
    console.log(selectedContactId)
    return(
        <>
            <p>{selectedContactId.name}</p>
            <p>{selectedContactId.username}</p>
            <p>{selectedContactId.phone}</p>
            <p>{selectedContactId.email}</p>

            <a onClick = {()=> setSelectedContactId(null)}><button>Back</button></a>
        </>
    )
}