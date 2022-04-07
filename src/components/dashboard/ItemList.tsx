import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const ItemList: React.FC = () => {

    const items = ["Centers", "Statistics"]
    const icons = [<AccountBalanceIcon />, <StackedLineChartIcon />]

    return <List>
        {items.map((text: string, index: number) => (
            <ListItem button key={index} onClick={() => console.log(index)}>
                <ListItemIcon>
                    {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>;
};

export { ItemList };
