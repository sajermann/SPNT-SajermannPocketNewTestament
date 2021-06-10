import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Chapter } from '../pages/Chapter';
import { Verse } from '../pages/Verse';
import { Reading } from '../pages/Reading';

const stackRoutes = createStackNavigator();


const AppRoutes : React.FunctionComponent = () => (
	<stackRoutes.Navigator
		headerMode="none"
		screenOptions={{
			cardStyle: {
				backgroundColor: '#fff'
			}
		}}
	>
		<stackRoutes.Screen
			name="Welcome"
			component={Welcome}
		/>
		<stackRoutes.Screen
			name="Chapter"
			component={Chapter}
		/>
		<stackRoutes.Screen
			name="Verse"
			component={Verse}
		/>
		<stackRoutes.Screen
			name="Reading"
			component={Reading}
		/>
		
	</stackRoutes.Navigator>
)

export default AppRoutes;