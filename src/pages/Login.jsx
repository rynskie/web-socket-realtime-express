import { Box, Button, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Link } from "react-router-dom"
import { Card, SignInContainer } from "../utils/style"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { authLogin } from '../redux/action/authAction'
import { fetchMajor } from '../redux/action/majorAction'


const Login = () => {
    const { register, handleSubmit } = useForm()
    const auth = useSelector((state) => state.auth.data)
    const dispatch = useDispatch()

    useEffect(() => dispatch(fetchMajor()), [])
    
    const onSubmit = (value) => dispatch(authLogin(value))

    return (
        <>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <TextField
                                // error={emailError}
                                // helperText={emailErrorMessage}
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Username"
                                autoComplete="username"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            {...register('username')}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                // error={passwordError}
                                // helperText={passwordErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            {...register('username')}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        //   onClick={validateInputs}
                        >
                            Sign in
                        </Button>
                        <center>
                            <Link to={"/register"}>
                                Register here
                            </Link>
                        </center>
                        {
                        !!auth?.err &&
                        !!auth?.err?.errors &&
                        auth?.err?.errors?.map((e, i) => (
                            <Typography
                                key={i}
                                variant="body2"
                                color="error"
                                sx={{ textAlign: 'center' }}
                            >
                                {e?.path} {e?.msg}
                            </Typography>
                        ))

                    }
                    </Box>
                </Card>
            </SignInContainer>
        </>
    )
}

export default Login