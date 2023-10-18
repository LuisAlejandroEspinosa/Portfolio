import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CardProyect({ proyecto }) {
    console.log(proyecto)
    const { imageProyectos, descripcion, Title, url, url_github } = proyecto;
    return (
        <Card className='contenCard' sx={{ maxWidth: 900, width: 850, }}>
            <CardHeader
                avatar={
                    <Avatar className='logo' sx={{ bgcolor: red[500] }} aria-label="recipe">
                        L
                    </Avatar>
                }
                action={
                    <IconButton className='tres-puntos' aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={Title}
            />

            <CardMedia className='imagen'
                src='/publi/proyectos/swipe.png'
                component="img"
                height="194"
                image={imageProyectos}
                alt="Paella dish"
            />

            <CardContent className='contenidocard'>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>

            <IconButton className='corazon' aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>

            <CardActions className='logoCompartir' disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}