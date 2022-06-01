class CucumberHelper {
    get scenarioName() {return window.testState.currentScenario.name}
}

export default new CucumberHelper();