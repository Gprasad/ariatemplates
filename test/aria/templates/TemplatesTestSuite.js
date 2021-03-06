/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Test suite regrouping all tests of the core namespace
 */
Aria.classDefinition({
    $classpath : "test.aria.templates.TemplatesTestSuite",
    $extends : "aria.jsunit.TestSuite",
    $constructor : function () {
        this.$TestSuite.constructor.call(this);

        this.addTests("test.aria.templates.ClassGeneratorTest");
        this.addTests("test.aria.templates.CSSCtxtManagerTest");
        this.addTests("test.aria.templates.CSSCtxtTest");
        this.addTests("test.aria.templates.CSSMgrTest");
        this.addTests("test.aria.templates.CSSParserTest");

        this.addTests("test.aria.templates.DomElementWrapper");
        this.addTests("test.aria.templates.EnableMethodEventInterceptorTest");
        this.addTests("test.aria.templates.FlowCtrlTest");
        this.addTests("test.aria.templates.ModifiersTest");
        this.addTests("test.aria.templates.ModuleCtrlFactoryTest");
        this.addTests("test.aria.templates.ModuleCtrlTest");
        this.addTests("test.aria.templates.ParserTest");
        this.addTests("test.aria.templates.SectionOnTypeTest");
        this.addTests("test.aria.templates.SectionTest");
        this.addTests("test.aria.templates.TemplateContextTest");
        this.addTests("test.aria.templates.TemplateManagerTest");

        this.addTests("test.aria.templates.TemplateTest");

        this.addTests("test.aria.templates.TplClassGeneratorTest");
        this.addTests("test.aria.templates.TxtClassGeneratorTest");
        this.addTests("test.aria.templates.TxtTemplateTest");
        this.addTests("test.aria.templates.ViewTest");

        this.addTests("test.aria.templates.generatedId.IncrementalElementIdTestCase");

        this.addTests("test.aria.templates.statements.StatementsTestSuite");

    }
});
