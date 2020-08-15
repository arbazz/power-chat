import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginContext } from '../Context/LoginProvider';

import {
    Home,
    Topics,
    Help,
    DescForm,
    CreateTopic,
    NewTopic,
    Searching,
    Profile,
    Result,
    Message,
    Singin,
    Register,
    MyTopics,
    AccountSettings,
    AddInterestedTopics
} from '../screens/index';
import { primaryColor } from '../Config/color';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();


function App() {
    const {user , login } = React.useContext(LoginContext);
    const [userData, setUserData] = user
    const [isLogin, setIsLogin] = login
    // console.log("login", isLogin)
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: primaryColor
            }
        }}>
            {isLogin == false ? <>
                <Stack.Screen name="Singin" component={Singin} />
                <Stack.Screen name="Register" component={Register} />
            </> :
                <>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Topics" component={Topics} />
                    <Stack.Screen name="Help" component={Help} />
                    <Stack.Screen name="DescForm" component={DescForm} />
                    <Stack.Screen name="CreateTopic" component={CreateTopic} />
                    <Stack.Screen name="NewTopic" component={NewTopic} />
                    <Stack.Screen name="Searching" component={Searching} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Message" component={Message} />
                    <Stack.Screen name="MyTopics" component={MyTopics} />
                    <Stack.Screen name="AccountSettings" component={AccountSettings} />
                    <Stack.Screen name="AddInterestedTopics" component={AddInterestedTopics} />
                </>
            }
        </Stack.Navigator>
    );
}


function RootStackScreen() {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={App}
                options={{ headerShown: false }}
            />
            <RootStack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </RootStack.Navigator>
    );
}

export default function MainApp() {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    )
}