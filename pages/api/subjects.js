const subjects = [
    {
        id: 1,
        title: 'FCET',
        author: 'typicode',
        unit: 1,
        link: 'https://drive.google.com/file/d/1rWw_Znu16wNCYWglqkwcWDicBNdLqs9m/view?usp=share_link'
    }
];

export default function handler(req, res) {
    res.status(200).json({ subjects });
}
