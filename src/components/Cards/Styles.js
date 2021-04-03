import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  totalPaper: {
    padding: theme.spacing(2),
    background: '#cf1d25',
    borderRadius: 10
  },
  totalPaperText:{
    fontWeight:"bold",
    color: '#fff',
  },
  totalTotalPaperText:{
    fontWeight:"bold",
    color: '#fff',
    fontSize: 12
  },
  activePaper: {
    padding: theme.spacing(2),
    background: 'rgba(255, 142, 44, 1)',
    borderRadius: 10
  },
  activePaperText:{
    fontWeight:"bold",
    color: '#fff',
  },
  activeTotalPaperText:{
    fontWeight:"bold",
    color: '#fff',
    fontSize: 12
  },
  recoveredPaper: {
    padding: theme.spacing(2),
    background: '#A2F8BB',
    borderRadius: 10
  },
  recoveredPaperText:{
    fontWeight:"bold",
    color: '#1C9739',
  },
  recoveredTotalPaperText:{
    fontWeight:"bold",
    color: '#1C9739',
    fontSize: 12
  },
  deathsPaper: {
    padding: theme.spacing(2),
    background: '#15a09d',
    borderRadius: 10
  },
  deathsPaperText:{
    fontWeight:"bold",
    color: '#ffff',
  },
  deathsTotalPaperText:{
    fontWeight:"bold",
    color: '#ffff',
    fontSize: 12
  }
}));