{
    "movie": {
        "title": <#if subject.findValue("title")??>"${subject.findValue("title")?lower_case?cap_first}"<#else>""</#if>
    }
}
