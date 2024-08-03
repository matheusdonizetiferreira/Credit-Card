import { View, Text } from "react-native"
import Animated, { useAnimatedStyle, SharedValue, interpolate, withTiming } from "react-native-reanimated"

import { styles } from "./styles"

type CreditCardProps = {
    cardSide: SharedValue<number>
}

export enum CARD_SIDE {
    front = 0,
    back = 1,
}


export function CreditCard({ cardSide }: CreditCardProps) {

    const frontAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value,
            [CARD_SIDE.front, CARD_SIDE.back],
            [0, 180]
        )

        return {
            transform: [
                { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
            ]
        }
    })


    const backAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value,
            [CARD_SIDE.front, CARD_SIDE.back],
            [180, 360]
        )

        return {
            transform: [
                { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
            ]
        }
    })

    return (
        <View>
            <Animated.View style={[styles.card, styles.front, frontAnimatedStyles]}>
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

            <Animated.View style={[styles.card, styles.back, backAnimatedStyles]}>


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