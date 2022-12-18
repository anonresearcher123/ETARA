{
    "Identifier": {
        "ISNI": <#if subject.findValue("hasIsni")??>"${subject.findValue("hasIsni")?json_string}",<#else>"N/A",</#if>
        "AlphaNumeric": <#if subject.findValue("hasAlphaNumeric")??>"${subject.findValue("hasAlphaNumeric")?json_string}",<#else>"N/A",</#if>
        "Alpha2Code": <#if subject.findValue("hasAlpha2")??>"${subject.findValue("hasAlpha2")?json_string}",<#else>"N/A",</#if>
        "Alpha3Code": <#if subject.findValue("hasAlpha3")??>"${subject.findValue("hasAlpha3")?json_string}"<#else>"N/A"</#if>
    },
    "ImportantAges": {
        "MajorityAge": <#if subject.findValue("hasAgeOfMajority")??>"${subject.findValue("hasAgeOfMajority")?json_string}",<#else>"N/A",</#if>
        "MarriageAge": <#if subject.findValue("hasAgeOfMarriage")??>"${subject.findValue("hasAgeOfMarriage")?json_string}",<#else>"N/A",</#if>
        "RetirementAge": <#if subject.findValue("hasAgeOfRetirement")??>"${subject.findValue("hasAgeOfRetirement")?json_string}"<#else>"N/A"</#if>
    },
    "Temperature": {
        "MinTemperature": <#if subject.findValue("hasMinTemperature")??>"${subject.findValue("hasMinTemperature")?json_string}",<#else>"N/A",</#if>
        "MaxTemperature": <#if subject.findValue("hasMaxTemperature")??>"${subject.findValue("hasMaxTemperature")?json_string}"<#else>"N/A"</#if>
    },
    "Income": {
        "MedianIncome": <#if subject.findValue("hasMedianIncome")??>"${subject.findValue("hasMedianIncome")?json_string}",<#else>"N/A",</#if>
        "LowestWage": <#if subject.findValue("hasLowestWage")??>"${subject.findValue("hasLowestWage")?json_string}"<#else>"N/A"</#if>
    },
    "FertilityRate": <#if subject.findValue("hasFertilityRate")??>"${subject.findValue("hasFertilityRate")?json_string}",<#else>"N/A",</#if>
    "SuicidalRate": <#if subject.findValue("hasSuicidalRate")??>"${subject.findValue("hasSuicidalRate")?json_string}",<#else>"N/A",</#if>
    "Inception": <#if subject.findValue("hasInception")??>"${subject.findValue("hasInception")?json_string}",<#else>"N/A",</#if>
    "LifeExpectancy": <#if subject.findValue("hasLifeExpectancy")??>"${subject.findValue("hasLifeExpectancy")?json_string}",<#else>"N/A",</#if>
    "NumberOfPopulation": <#if subject.findValue("hasNumberOfPopulation")??>"${subject.findValue("hasNumberOfPopulation")?json_string}"<#else>"N/A"</#if>
}