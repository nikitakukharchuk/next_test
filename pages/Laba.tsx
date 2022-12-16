import {Card} from "../components/Cards";
import {Autocomplete, TextField} from "@mui/material";


export type CardsType = OneCardType[]
export type OneCardType = {
    id: number
    title: string
    userName: string
    date: string

}

const Laba = () => {
    const cards: CardsType = [
        {id: 1, title: 'General question about Node.js1', userName: 'Person_1', date: "010101"},
        {id: 2, title: 'General question about Node.js2', userName: 'Person_2', date: "020202"},
        {id: 3, title: 'General question about Node.js3', userName: 'Person_3', date: "030101"},
        {id: 4, title: 'General question about Node.js4', userName: 'Person_4', date: "040101"},
        {id: 5, title: 'General question about Node.js5', userName: 'Person_5', date: "050101"},
        {id: 6, title: 'General question about Node.js6', userName: 'Person_6', date: "060101"},
        {id: 7, title: 'General question about Node.js7', userName: 'Person_7', date: "070101"},
        {id: 8, title: 'General question about Node.js8', userName: 'Person_8', date: "080101"},
    ]
    const options = ['Name', 'Time', 'Grade'];

    return (
        <main className='w-6/12'>
            <h2 className='font-medium '>Эвелина</h2>
            <hr/>
            <h2>Леша</h2>
            <hr/>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{width: 100}}
                renderInput={(params) => <TextField {...params} label="Movie"/>}
            />
            <div className='flex flex-wrap '>
                {cards.map(({id, title, userName, date}) =>
                    <Card key={id} title={title} userName={userName} date={date}/>)}
            </div>
        </main>
    );
};
export default Laba

