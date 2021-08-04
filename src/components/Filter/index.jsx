import React from 'react'
import {ToggleButton,ToggleButtonGroup} from '@material-ui/lab'
import  {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        width: '100%',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        padding: '0 50px',
        marginBottom:'25px'
    },
    toggle:{
        fontFamily:`'Raleway', sans-serif`,
        fontSize: '.8rem',
        border:'1px solid rgba(0,0,0,.12)',
        borderRadius:'40px',
        padding: '10px 20px 5px',
        marginBottom:'15px',
        '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)':{
            borderRadius: '40px'
        },
         '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)':{
            borderRadius: '40px',
            border: '1px solid rgba(0,0,0,.12)'
        },
         '&.Mui-selected':{
            borderRadius: '40px', 
            background: '#000',
            color: '#fff'
        },
        '&.MuiToggleButton-root':{
            '&:hover':{
                background: '#000',
                color: '#fff'
            }
           
           
        },



    }
}));


const FilterToggle = ({options,value,selectToggle}) => {
    const classes  = useStyles()
    return (
      
            <ToggleButtonGroup value={value} onChange={selectToggle} className={classes.root} exclusive>
                {
                    options.map(({label,id,value})=>(
                        <ToggleButton className={classes.toggle} key={id} value={value}>
                            {label}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>

           
     
    )
}

export default FilterToggle
