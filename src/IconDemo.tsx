import { Container, Grid } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import FourKIcon from '@material-ui/icons/FourK'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty'
import React from 'react'
import { AppTitleContextConsumer } from './AppTitleContext'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: theme.palette.text.primary,
		},
	})
)

function IconDemo() {
	const classes = useStyles()

	return (
		<AppTitleContextConsumer>
			{(context) => {
				context.setTitle('Icon Demo Page')

				return (
					<Container
						className={classes.root}
						style={
							{
								// alignItems: 'center',
								// display: 'flex',
								// flexDirection: 'column',
								// justifyContent: 'center',
								// justifyItems: 'center',
							}
						}
					>
						<Grid container alignItems="center" justify="center">
							<Grid item>
								<Typography>Filled</Typography>
								<DeleteIcon />
								<DeleteForeverIcon />
								<br />
								<Typography>Outlined</Typography>
								<DeleteOutlinedIcon />
								<DeleteForeverOutlinedIcon />
								<br />
								<Typography>Rounded</Typography>
								<DeleteRoundedIcon />
								<DeleteForeverRoundedIcon />
								<br />
								<Typography>Two Tone</Typography>
								<DeleteTwoToneIcon />
								<DeleteForeverTwoToneIcon />
								<br />
								<Typography>Sharp</Typography>
								<DeleteSharpIcon />
								<DeleteForeverSharpIcon />
								<br />
								<Typography>Edge-cases</Typography>
								<ThreeDRotationIcon />
								<FourKIcon />
								<ThreeSixtyIcon />
							</Grid>
						</Grid>
					</Container>
				)
			}}
		</AppTitleContextConsumer>
	)
}

export { IconDemo }
