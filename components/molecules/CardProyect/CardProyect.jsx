import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function CardProyect({ proyecto }) {
    const { imageProyectos, descripcion, Title, url, url_github, } = proyecto;
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
        <Card className='contenCard' sx={{ maxWidth: 300, width: 280, margin: 0  }}>
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

                component="img"
                height="194"
                image={imageProyectos}
                alt={Title}
            />

            <CardContent className='contenidocard'>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>
                <div style={{display: 'flex', alignItems: 'center'}}>
            <IconButton className='Github' aria-label="go to GitHub">
                <Link href={url_github} target='_blank'>
                    <GitHubIcon />
                </Link>
            </IconButton>

            <CardActions className='logoCompartir' disableSpacing>
                <IconButton aria-label="share">
                    <Link href={url} target='_blank'>
                    <Button variant="contained" color="primary">Visitar</Button>
                    </Link>
                </IconButton>
            </CardActions>
            </div>
        </Card>
        </div>
    );
}