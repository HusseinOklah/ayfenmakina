
interface producProps{
    id:string
}

export default function page( params : producProps){
    return (
        <main className="h-12 bg-red-300">{params.id}</main>
    );
}