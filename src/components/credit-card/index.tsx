import { View, Text } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

import { styles } from "./styles"


export function CreditCard() {
    const frontAnimatedStyles = useAnimatedStyle(() => {
        
    })
    return (
        <View>
            <Animated.View style={[styles.card, styles.front]}>
                {/*cabeçalho*/}
                <View style={styles.header}>
                    <View style={[styles.circle, styles.logo]} />
                    <Text>Bank Card</Text>
                </View>

                {/*footer*/}
                <View style={styles.footer}>
                    <Text style={styles.name}>Matheus Ferreira</Text>

                    {/*a flag é a bandeira do cartão*/}
                    <View style={styles.flag}>
                        <View style={[styles.circle, styles.red]} />
                        <View style={[styles.circle, styles.
                            orange]} />
                    </View>
                </View>
            </Animated.View >

            <Animated.View style={[styles.card, styles.back]}>

                
                    <View>
                        <Text style={styles.label}>Número do cartão</Text>
                        <Text style={styles.value}>1234 5678 9208 7631</Text>
                    </View>

                    <View style={styles.footer}>
                        <View>
                            <Text style={styles.label}>Valid</Text>
                            <Text style={styles.value}>19/31</Text>
                        </View>

                        <View>
                        <Text style={styles.label}>CVV</Text>
                            <Text style={styles.value}>768</Text>
                        </View>
                    </View>
                

            </Animated.View>
        </View>
    )
}