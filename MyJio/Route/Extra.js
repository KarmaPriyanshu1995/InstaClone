const Bottomscreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 50,
                },
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home-sharp" : "home-outline";
                        size = focused ? size + 8 : size + 2;
                    } else if (route.name === "Search") {
                        iconName = focused ? "search" : "search-outline"
                    } else if (route.name === "Reels") {
                        iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline"
                    } else if (route.name === "Activity") {
                        iconName = focused ? "heart" : "heart-outline"
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person-circle" : "person-outline"
                    }
                    return <Ionic name={iconName} size={size} color={colour} />
                }



            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='BottomScreen' component={Bottomscreen} />
        </Stack.Navigator>
    </NavigationContainer>
)