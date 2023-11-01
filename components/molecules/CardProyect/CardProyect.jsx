import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";

export default function CardProyect({ proyecto }) {
    const { imageProyectos, descripcion, Title, url, url_github } = proyecto;

    return (
        <Card
            sx={{ maxWidth: 345 }}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Image
                sx={{ height: 140 }}
                src={imageProyectos}
                alt={Title}
                style={{ width: "100%", height: "100%" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "end",
                    alignItems: "end",
                }}

            >
                <Button variant="contained" fullWidth size="small" className="btn-card">
                    <Link href={url} target="_blank">
                        Visitar
                    </Link>
                </Button>
                <Button size="small" style={{ color: "#47d16e" }} fullWidth>
                    <Link href={url_github} target="_blank">
                        <GitHubIcon />
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}