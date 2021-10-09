import React from 'react';
import { Grid, Text, Input, Button } from '../elements';

const Signup = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px bold">회원가입</Text>
                <Grid padding="16px 0px">
                    <Input label="아이디" placeholder="아이디를 입력해줏요."_onChange={() => {console.log('!!')}}/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Signup.defaultProps = {}

export default Signup;