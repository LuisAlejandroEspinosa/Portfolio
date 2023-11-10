
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function CardContent () {
    return (
        <Card>
            <CardMedia 
            component="img" 
            imagen="public/logo-dark.svg"
            height="200"
            alt="logo"/>
        </Card>
    );
}