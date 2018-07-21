import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import Cours from '../../../models/Cours';

export default class CoursList extends React.Component {

    state = {
        listCours: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.initCoursData();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });  
    }

    initCoursData = () => {
        let coursData = this.state.data
        let listCours = []

        coursData.forEach(element => {
            let cours = new Cours(
                element.UUID,
                element.SUMMARY,
                element.DESCRIPTION,
                element.LOCATION,
                element.DTSTART,
                element.DTEND
            )
            listCours.push(cours)
        });

        coursData.sort((a, b) => a.DTSTART - b.DTSTART)

        console.log(coursData)

        this.setState({listCours: listCours})
    }

    _renderItem = ({ item, index }) => (
        <Text style={styles.item} onPress={() => console.log(item)}>
            { item }
        </Text>
    )

    _renderSectionHeader = ({ section }) => (
        <Text style={styles.sectionHeader}>
            { section.title }
        </Text>
    )

    render() {
        return (
            <SectionList
                sections={[
                    {title: 'D', data: ['Devin']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    {title: 'K', data: ['Kevin', 'Kilian']},
                    {title: 'P', data: ['Patrick', 'Pierre']},
                ]}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                keyExtractor={(item, index) => index}
            />
        )
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        padding: 16,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#9e9e9e'
    },
    item: {
        padding: 16,
        fontSize: 18
    }
})