import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, } from '@mui/material/colors';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';




export default function CardProyect({ proyecto }) {
    const { imageProyectos, descripcion, Title, url, url_github, } = proyecto;
    const renderImage = (imageSrc) => {
        return (
            <img src={imageSrc} />
        );
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: "320px",
            height: "500px"
        }}>
            <Card className='contenCard' sx={{
                width: "300px",
                height: "470px",
                padding: "16px",
                borderRadius: "8px",
                display: "grid",
                margin: "40px",
            }}>
                <CardHeader
                    avatar={
                        <Avatar className='logo' sx={{ bgcolor: green[400] }} aria-label="recipe">
                            L
                        </Avatar>
                    }
                    // action={
                    //     <IconButton className='tres-puntos' aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={Title}
                />

                <CardMedia className='imagen'
                    component="img"
                    height="50"
                    width="50"
                    image={renderImage(imageProyectos)}
                    alt={Title}

                />
                {/* <Image src={imageProyectos} alt={Title} className='imagen'/> */}
                <CardContent className='contenidocard'>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
        </div >
    );
}