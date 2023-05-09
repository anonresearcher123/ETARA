{
    "feed": {
        "entry": {
            "name": <#if subject.findValue("primaryFullCreatorName")??>"${subject.findValue("primaryFullCreatorName")?keep_after_last(" ")?json_string} ${subject.findValue("primaryFullCreatorName")?keep_before(" ")?json_string}"<#else>""</#if>
        }
    }
}
