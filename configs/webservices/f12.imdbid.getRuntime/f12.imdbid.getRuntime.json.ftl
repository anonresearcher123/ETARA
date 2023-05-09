{
    "movie": {
        "runtime": <#if subject.findValue("runtime")??>"${subject.findValue("runtime")?json_string} Minutes"<#else>""</#if>
    }
}
